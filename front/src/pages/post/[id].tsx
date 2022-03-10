import React from 'react';

import { useRouter } from 'next/router';

const DetailPost = () => {
  const router = useRouter();

  const { id } = router.query;

  console.log(id);

  return <div>asasa</div>;
};

export default DetailPost;
