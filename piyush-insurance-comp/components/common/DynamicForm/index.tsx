'use client';

import { useForm, FieldValues, SubmitHandler, PathValue, useWatch } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { DndContext } from '@dnd-kit/core';
import { useEffect } from 'react';
import { FieldConfig, ImageField } from './types';
import ImageUpload from '../ImageUpload';
import styles from './DynamicForm.module.scss';
import { ToolTipIcon } from '../ToolTipIcon';
import { statesByCountry } from '@/data/location';

interface DynamicFormProps<FormValues extends FieldValues> {
  fields: FieldConfig<FormValues>[];
  imageFields?: ImageField<FormValues>[];
  onSubmit: SubmitHandler<FormValues>;
  mode?: 'create' | 'edit';                 // ← ADD
  defaultValues?: Partial<FormValues>;       // ← ADD
}

export default function DynamicForm<FormValues extends FieldValues>({
  fields,
  imageFields,
  onSubmit,
  mode = 'create',                          // ← ADD
  defaultValues,                            // ← ADD
}: DynamicFormProps<FormValues>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    control,
    reset,                                  // ← ADD
  } = useForm<FormValues>({ mode: 'onChange' });

  const watchedValues = useWatch({ control });

  /* ---------- Prefill on edit ---------- */

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues as FormValues);
    }
  }, [defaultValues, reset]);

  /* ---------- Resolve options ---------- */

  const resolveOptions = (field: FieldConfig<FormValues>) => {
    if (field.dependsOn) {
      const parentValue = watchedValues[field.dependsOn as string] as string;
      return parentValue ? (statesByCountry[parentValue] ?? []) : [];
    }
    return field.options ?? [];
  };

  /* ---------- Render Field ---------- */

  const renderField = (field: FieldConfig<FormValues>) => {
    const { name, label, type, validation, tooltip, placeholder, fullWidth, uppercase } = field;
    const options = resolveOptions(field);

    return (
      <div
        className={`${styles.field} ${fullWidth ? styles.fullWidth : ''}`}
        key={String(name)}
      >
        <label>
          {label}{' '}
          {field.required && <span>(Required)</span>}
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
          <p className={styles.error}>{errors[name]?.message as string}</p>
        )}
      </div>
    );
  };

  /* ---------- Image Fields ---------- */

  const renderImageFields = () => (
    <DndContext>
      {imageFields?.map((img) => (
        <ImageUpload
          key={String(img.name)}
          id={String(img.name)}
          label={img.label}
          onChange={(file) => {
            setValue(img.name, file as PathValue<FormValues, typeof img.name>);
          }}
        />
      ))}
    </DndContext>
  );

  /* ---------- Submit label ---------- */

  const submitLabel = mode === 'edit'
    ? 'Update Insurance Company'
    : 'Create Insurance Company';

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.grid}>
        {fields.map(renderField)}
      </div>

      {imageFields && (
        <div className={styles.images}>{renderImageFields()}</div>
      )}

      <button
        type="submit"
        className={styles.submit}
        disabled={!isValid}
      >
        {submitLabel}
      </button>
    </form>
  );
}