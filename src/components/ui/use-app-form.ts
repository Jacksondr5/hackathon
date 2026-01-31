"use client";

import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./form-contexts";
import { FieldInput } from "./field-input";
import { FieldTextarea } from "./field-textarea";
import { FieldSelect } from "./field-select";
import { SubmitButton } from "./submit-button";

export const { useAppForm } = createFormHook({
  fieldComponents: {
    FieldInput,
    FieldTextarea,
    FieldSelect,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
