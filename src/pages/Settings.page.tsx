/* eslint-disable import/order */
import Loader from '@/components/Loader';
import { PutV1AuthPasswordChangeErrorResponse } from '@/store/api';
import { useChangePasswordMutation } from '@/store/apis/auth';
import { updateUser } from '@/store/features/auth';
import { Button, PasswordInput, Text } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconLock } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { z } from 'zod';

const validators = z
  .object({
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(100, 'Password must be at most 100 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type TFormValues = z.infer<typeof validators>;

export default function SettingsPage() {
  const [updateUserFn, { isLoading: updateUserLoading }] = useChangePasswordMutation();
  const dispatch = useDispatch();

  const mform = useForm<TFormValues>({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: zodResolver(validators),
    validateInputOnChange: true,
    validateInputOnBlur: true,
  });

  const handleSubmmit = async (values: TFormValues) => {
    try {
      await updateUserFn(values).unwrap();
      dispatch(updateUser(values));
      notifications.show({
        title: 'Success',
        message: 'Profile updated successfully',
        color: 'green',
      });
    } catch (err) {
      const error = err as {
        data: PutV1AuthPasswordChangeErrorResponse;
      };
      notifications.show({
        title: 'Error',
        message: error?.data?.error?.message || 'Something went wrong',
        color: 'red',
      });
    }
  };

  return (
    <section>
      <div className="container max-w-xl mx-auto p-4">
        <div className="flex flex-wrap justify-between items-center py-4">
          <Text className="font-bold text-base md:text-lg xl:text-2xl">Settings</Text>
        </div>
        <form className="grid gap-4" onSubmit={mform.onSubmit(handleSubmmit)}>
          <PasswordInput
            label="Password"
            placeholder="Enter password"
            leftSection={<IconLock size={16} />}
            {...mform.getInputProps('password')}
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            leftSection={<IconLock size={16} />}
            {...mform.getInputProps('confirmPassword')}
          />

          <Button type="submit" className="bg-gray-800 text-white" loading={updateUserLoading}>
            Update
          </Button>
          <Loader isLoading={updateUserLoading} />
        </form>
      </div>
    </section>
  );
}
