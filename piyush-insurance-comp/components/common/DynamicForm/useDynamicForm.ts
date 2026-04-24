'use client';

import {
  useForm,
  FieldValues,
  Path,
  PathValue,
  useWatch,
} from 'react-hook-form';
import { useEffect } from 'react';
import { FieldConfig } from './types';
import { statesByCountry } from '@/data/location';

interface UseDynamicFormProps<FormValues extends FieldValues> {
  fields: FieldConfig<FormValues>[];
  defaultValues?: Partial<FormValues>;
}

export function useDynamicForm<FormValues extends FieldValues>({
  defaultValues,
}: UseDynamicFormProps<FormValues>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    setValue,
    control,
    reset,
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const watchedValues = useWatch({ control });

  /* Prefill */

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues as FormValues);
    }
  }, [defaultValues, reset]);

  /* Resolve dependent options */

  const resolveOptions = (field: FieldConfig<FormValues>) => {
    if (field.dependsOn) {
      const parentValue = watchedValues[field.dependsOn as Path<FormValues>] as string;
      return parentValue ? statesByCountry[parentValue] ?? [] : [];
    }

    return field.options ?? [];
  };

  /* Image handler */

  const handleImageChange = <K extends Path<FormValues>>(
    name: K,
    file: File | null
  ) => {
    setValue(name, file as PathValue<FormValues, K>, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    isDirty,
    resolveOptions,
    handleImageChange,
  };
}