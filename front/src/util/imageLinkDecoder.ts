export default function decodeImageLink(data: any) {
  if (!data) {
    return `pictures/no-image.svg`;
  } else {
    const buff = Buffer.from(data, 'base64');
    const text = buff.toString('ascii');
    return `data:image/png;base64,${text}`;
  }
}
