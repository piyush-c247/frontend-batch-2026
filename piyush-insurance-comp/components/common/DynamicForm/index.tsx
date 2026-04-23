'use client';

import { useForm, FieldValues, SubmitHandler, PathValue, useWatch } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { FieldConfig, ImageField } from './types';
import ImageUpload from '../ImageUpload';
import styles from './DynamicForm.module.scss';
import { ToolTipIcon } from '../ToolTipIcon';
import { statesByCountry } from '@/data/location';

interface DynamicFormProps<FormValues extends FieldValues> {
  fields: FieldConfig<FormValues>[];
  imageFields?: ImageField<FormValues>[];
  onSubmit: SubmitHandler<FormValues>;
}

export default function DynamicForm<FormValues extends FieldValues>({
  fields,
  imageFields,
  onSubmit,
}: DynamicFormProps<FormValues>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    control,                
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  // Watch all fields that are used as dependsOn sources
  const watchedValues = useWatch({ control });



  const resolveOptions = (field: FieldConfig<FormValues>) => {
    if (field.dependsOn) {
      const parentValue = watchedValues[field.dependsOn as string] as string;
      return parentValue ? (statesByCountry[parentValue] ?? []) : [];
    }
    return field.options ?? [];
  };

  /* Render Field  */

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

  /* Image Fields */

  const renderImageFields = () =>
    imageFields?.map((img) => (
      <ImageUpload
        key={String(img.name)}
        label={img.label}
        onChange={(file) => {
          setValue(img.name, file as PathValue<FormValues, typeof img.name>);
        }}
      />
    ));

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
        Create Insurance Company
      </button>
    </form>
  );
}