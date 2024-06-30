import { gql, request } from "graphql-request";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        seat
        carType
        image {
          url
        }
      }
    }
  `;
  const result = await request(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cly1moxd1055f07w8wndk0whi/master",
    query
  );

  return result;
};
