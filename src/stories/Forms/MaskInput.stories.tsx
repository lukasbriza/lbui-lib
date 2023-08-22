import React, { useEffect, useRef } from "react";
import { MaskInput } from "../../components";
import { Meta, StoryFn } from "@storybook/react";
import { Form, useForm } from "react-hook-form";
import IMask from "imask/holder";

export default {
  title: "@lbui/Forms/MaskInput",
  component: MaskInput,
} as Meta<typeof MaskInput>;

const Template: StoryFn<typeof MaskInput> = (args) => {
  const { name, ...otherargs } = args;
  const { register, handleSubmit } = useForm({
    defaultValues: { mask: "10" },
  });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <MaskInput {...register("mask")} {...otherargs} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "mask",
  label: "MaskInput",
  maskOptions: {
    mask: "HH",
    blocks: {
      HH: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 10,
      },
    },
  },
  inputProps: {
    defaultValue: "10",
  },
};
