import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.75rem;
  margin-bottom: 6.875rem;
`;
export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  h2 {
    font-size: 4rem;
    font-weight: 500;
    line-height: 1.4;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;
export const InfoImg = styled.div`
  display: flex;
  gap: 5.2rem;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: center;
`;
export const InfoImgContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 1.5rem;
  p {
    font-size: 1.5rem;
    line-height: 1.3;
    text-align: center;
  }
`;
