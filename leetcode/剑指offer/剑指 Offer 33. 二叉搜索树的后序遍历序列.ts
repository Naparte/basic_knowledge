function verifyPostorder(postorder: number[]): boolean {
  if (postorder.length < 2) {
    return true;
  }

  let lastindex = postorder.length - 1;
  let root = postorder[lastindex];

  let index = postorder.findIndex((val, i) => {
    return postorder[i] > root;
  });
  let left = postorder.slice(0, index);
  let right = postorder.slice(index, lastindex);

  if (index === -1) {
    left = postorder.slice(0, lastindex);
    right = [];
  }

  if (∫
    left.some((val) => {
      return val > root;
    }) ||
    right.some((val) => {
      return val < root;
    })
  ) {
    return false;
  }

  return verifyPostorder(left) && verifyPostorder(right);
}
