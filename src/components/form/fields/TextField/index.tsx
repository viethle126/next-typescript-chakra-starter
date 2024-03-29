import React from "react"
import { Field } from "formik"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react"
import { hookOnChange } from "../../utils"

const TextField = ({
  name,
  type = "text",
  label,
  placeholder,
  onChange = (...args: any) => {},
  autoComplete = "off",
  disabled,
  className,
}: any) => (
  <Field name={name}>
    {({ field, form }) => {
      const touched = form.touched && form.touched[name]
      const error = form.errors && form.errors[name]

      return (
        <FormControl isInvalid={error && touched}>
          <FormLabel htmlFor={name} fontFamily="Roboto Bold">
            {label}
          </FormLabel>
          <Input
            {...field}
            type={type}
            label={label}
            placeholder={placeholder}
            onChange={hookOnChange(field, onChange)}
            autoComplete={autoComplete}
            disabled={!!disabled}
            className={className}
            borderColor="black"
            color="#5865F2"
          />
          {error && <FormErrorMessage>{error || undefined}</FormErrorMessage>}
        </FormControl>
      )
    }}
  </Field>
)

export default TextField
