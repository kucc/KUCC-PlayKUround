export function getImageLink(data: any) {
  if (data === undefined) {
    return `pictures/no-image.svg`;
  } else {
    const buff = Buffer.from(data, 'base64');
    const text = buff.toString('ascii');
    return `data:image/png;base64,${text}`;
  }
}
