interface GenericType {
  id: number,
  name: string,
}

interface TrackedModification extends GenericType {
  createdAt?: string,
  updatedAt?: string,
}