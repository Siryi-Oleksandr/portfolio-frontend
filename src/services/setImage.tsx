export const setImage = (
  projectImg: string,
  placeholder: string,
  projectByIdImages: { posterURL: string; posterID: string }[] | undefined,
  index: number
) => {
  return projectImg === placeholder
    ? projectByIdImages && projectByIdImages[index]
      ? projectByIdImages[index].posterURL
      : placeholder
    : projectImg;
};
