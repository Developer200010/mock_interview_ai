import React from 'react';
import {
    Form,
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: "email"|"text" | "password" | "file";
}

const FormField = <T extends FieldValues>({
    control,
    name,
    label,
    placeholder = "",
    type = "text"
}: FormFieldProps<T>) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input className='input' type={type} placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);

export default FormField;
