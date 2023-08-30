import styled from "styled-components";
import { BASE_URL } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map((foods) => (
          <FoodCard key={foods.name}>
            <div className="food_image">
              <img src={BASE_URL + foods.image} alt="" />
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  height: calc(100vh - 210px);
`;

const FoodCards = styled.div``;
const FoodCard = styled.div``;
