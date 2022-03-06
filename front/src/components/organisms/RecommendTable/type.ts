export type RecommendTableProps = {
  navbarTitle: string;
  textGroupList: (
    | {
        topText: string;
        bottomText: string;
        topCommaText?: undefined;
      }
    | {
        topCommaText: string;
        bottomText: string;
        topText?: undefined;
      }
  )[];
};
