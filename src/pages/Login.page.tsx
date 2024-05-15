import { PostV1AuthLoginErrorResponse } from '@/store/api';
import { useLoginMutation } from '@/store/apis/auth';
import { Button, Paper, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconLock, IconMessage } from '@tabler/icons-react';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';

const validationSchema = z.object({
  email: z.string().trim().toUpperCase().email({ message: 'Invalid Email' }),
  password: z.string(),
});

export default function LoginPage() {
  const [loginFn, { isLoading }] = useLoginMutation();
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(validationSchema),
    validateInputOnBlur: true,
    validateInputOnChange: true,
  });
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <Paper className="grid gap-4 max-w-xl mx-auto">
          <form
            onSubmit={form.onSubmit(async (values) => {
              try {
                await loginFn(values).unwrap();
                notifications.show({
                  title: 'Success',
                  message: 'Login successfully',
                  color: 'green',
                });
              } catch (err: any) {
                const error = err as { data: PostV1AuthLoginErrorResponse };
                notifications.show({
                  title: 'Error',
                  message: error?.data?.error?.message || "Something's wrong",
                  color: 'red',
                });
              }
            })}
          >
            <Text size="xl" className="mb-4">
              Login to <span className="text-blue-500">Dashboard</span>
            </Text>
            <TextInput
              label="Enter email"
              placeholder="Your email"
              classNames={{
                label: 'mb-2',
              }}
              leftSection={<IconMessage size={16} />}
              error={form.errors.email}
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label="Enter password"
              placeholder="Your password"
              classNames={{
                label: 'mb-2',
              }}
              leftSection={<IconLock size={16} />}
              error={form.errors.password}
              {...form.getInputProps('password')}
            />
            <Button
              type="submit"
              className="bg-gray-900 mt-6 w-full"
              disabled={isLoading}
              loading={isLoading}
            >
              Login
            </Button>
          </form>
        </Paper>
      </div>
    </section>
  );
}
