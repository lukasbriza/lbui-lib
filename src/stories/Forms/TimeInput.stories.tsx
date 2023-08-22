import React, { useEffect, useRef } from "react";
import { TimeInput } from "../../components";
import { Meta, StoryFn } from "@storybook/react";
import { Form, useForm } from "react-hook-form";

export default {
  title: "@lbui/Forms/TimeInput",
  component: TimeInput,
} as Meta<typeof TimeInput>;

const Template: StoryFn<typeof TimeInput> = (args) => {
  const { name, ...otherargs } = args;
  const ref = useRef<HTMLInputElement>(null);
  const { watch, register, handleSubmit } = useForm({
    defaultValues: { [name]: "01:00" },
  });
  const val = watch(name);

  const submit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <TimeInput {...register(name)} {...otherargs} />
        {val}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "TimeFrom",
  label: "Od",
  defaultValue: "01:00",
};
