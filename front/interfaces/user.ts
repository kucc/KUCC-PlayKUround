interface imageProps {
  data: any;
  type: string;
}

export default interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 0 | 1;
  image: imageProps;
}
