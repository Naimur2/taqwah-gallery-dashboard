import { Text } from '@mantine/core';

type TMessageItem = {
  title: string;
  message?: string;
};

export default function ItemWithLabel({ message, title }: TMessageItem) {
  return (
    <div className="grid gap-1">
      <Text className="font-medium">{title}</Text>
      <Text className="capitalize" size="sm">
        {message}
      </Text>
    </div>
  );
}
