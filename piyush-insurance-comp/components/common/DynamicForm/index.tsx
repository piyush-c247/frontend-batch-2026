'use client';

import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { DndContext } from '@dnd-kit/core';

import { FieldConfig, ImageField } from './types';
import { useDynamicForm } from './useDynamicForm';

import ImageUpload from '../ImageUpload';
import { ToolTipIcon } from '../ToolTipIcon';

import styles from './DynamicForm.module.scss';

interface DynamicFormProps<FormValues extends FieldValues> {
  fields: FieldConfig<FormValues>[];
  imageFields?: ImageField<FormValues>[];
  onSubmit: SubmitHandler<FormValues>;
  mode?: 'create' | 'edit';
  defaultValues?: Partial<FormValues>;
  submitLabel: string;
}

export default function DynamicForm<FormValues extends FieldValues>({
  fields,
  imageFields,
  onSubmit,
  mode = 'create',
  defaultValues,
  submitLabel
}: DynamicFormProps<FormValues>) {
  const {
    register,
    handleSubmit,
    errors,
    isValid,
    isDirty,
    resolveOptions,
    handleImageChange,
  } = useDynamicForm<FormValues>({ fields, defaultValues });

  /* Field Render */

  const renderField = (field: FieldConfig<FormValues>) => {
    const {
      name,
      label,
      type,
      validation,
      tooltip,
      placeholder,
      fullWidth,
      uppercase,
    } = field;

    const options = resolveOptions(field);

    return (
      <div
        key={String(name)}
        className={`${styles.field} ${fullWidth ? styles.fullWidth : ''}`}
      >
        <label>
          {label} {field.required && <span>(Required)</span>}
          {tooltip && (
            <span className={styles.tooltip}>
              <ToolTipIcon text={tooltip} />
            </span>
          )}
        </label>

        {type === 'text' && (
          <Form.Control
            {...register(name, validation)}
            placeholder={placeholder}
            style={uppercase ? { textTransform: 'uppercase' } : undefined}
          />
        )}

        {type === 'select' && (
          <Form.Select {...register(name, validation)}>
            <option value="">{placeholder ?? 'Select'}</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
        )}

        {errors[name] && (
          <p className={styles.error}>
            {errors[name]?.message as string}
          </p>
        )}
      </div>
    );
  };

  /* Image Fields */

  const renderImages = () => (
    <DndContext>
      {imageFields?.map((img) => (
        <ImageUpload
          key={String(img.name)}
          id={String(img.name)}
          label={img.label}
          onChange={(file) => handleImageChange(img.name, file)}
        />
      ))}
    </DndContext>
  );

  /* Submit Label */

  // const submitLabel =
  //   mode === 'edit'
  //     ? 'Update Insurance Company'
  //     : 'Create Insurance Company';

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.grid}>
        {fields.map(renderField)}
      </div>

      {imageFields && (
        <div className={styles.images}>{renderImages()}</div>
      )}

      <button
        type="submit"
        className={styles.submit}
        disabled={!isValid || (mode === 'edit' && !isDirty)}
      >
        {submitLabel}
      </button>
    </form>
  );
}