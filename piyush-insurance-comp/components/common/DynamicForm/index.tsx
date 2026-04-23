'use client';

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { FieldConfig, ImageField } from './types';
import ImageUpload from '../ImageUpload';
import styles from './DynamicForm.module.scss';
import { ToolTipIcon } from '../ToolTipIcon';

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
    } = useForm<FormValues>({
        mode: 'onChange',
    });

    /* ---------- Render Field ---------- */

    const renderField = (field: FieldConfig<FormValues>) => {
        const { name, label, type, options, validation, tooltip } = field;

        return (
            <div className={styles.field} key={String(name)}>
                <label>
                    {label} {field.required && <span>*</span>}
                    {tooltip && (
                        <span className={styles.tooltip}>
                            <ToolTipIcon />
                        </span>
                    )}
                </label>

                {type === 'text' && (
                    <Form.Control {...register(name, validation)} />
                )}

                {type === 'select' && (
                    <Form.Select {...register(name, validation)}>
                        <option value="">Select</option>
                        {options?.map((opt) => (
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

    /* ---------- Image Fields ---------- */

    const renderImageFields = () =>
        imageFields?.map((img) => (
            <ImageUpload
                key={String(img.name)}
                label={img.label}
                onChange={(file) => {
                    setValue(img.name, file as any);
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