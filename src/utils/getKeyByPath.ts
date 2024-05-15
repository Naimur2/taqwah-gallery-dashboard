function getByKeyPath<T>(object: T, keyPath: string | number | symbol): any {
  if (typeof keyPath === 'string') {
    return keyPath
      .split('.')
      .reduce(
        (result: { [x: string]: any } | null, key: string | number) =>
          result != null ? result[key] : undefined,
        object as { [key: string]: any }
      );
  }

  if (typeof keyPath === 'number') {
    return (object as any)[keyPath];
  }
  if (typeof keyPath === 'symbol') {
    return (object as any)[keyPath];
  }

  return (object as { [key: string]: any })[keyPath];
}

export default getByKeyPath;
