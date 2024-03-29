import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 100px;
  background: #ffffff;
  box-shadow: 3px 0px 20px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  /* z-index: 1000; */
  .big-brand{
    /* background-color: red; */
    cursor: pointer;
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;

  @media (max-width: 768px) {
    .small-brand {
      display: block;
    }
    .big-brand {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .small-brand {
      display: none;
    }
    .big-brand {
      display: block;
    }
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  max-width: 450px;
  margin-top: 1rem;
  .cancel-btn {
    cursor: pointer;
    width: 45px;
    height: 45px;
    color: #39cdcc;
    @media (min-width: 540px) {
      display: none;
    }
  }
  @media (max-width: 540px) {
    display: ${({ open }) => (open ? "flex" : "none")};
  }
  @media (min-width: 540px) {
    display: flex;
  }
`;

export const Profiles = styled.div`
  align-items: center;
  gap: 1rem;
  display: ${({ open }) => (open ? "none" : "flex")};
  .search-button {
    cursor: pointer;
    width: 23px;
    height: 23px;
  }
  .doc {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 20px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #213f7d;
    cursor: pointer;
  }
  .notification {
    font-size: 25px;
    color: #213f7d;
    cursor: pointer;
  }
  .user-details {
    display: flex;
    align-items: center;
  }
  .user-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: contain;
    margin-right: 0.6rem;
  }
  .username {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #213f7d;
  }
  .user-info {
    margin-left: 0.4rem;
  }
  @media (max-width: 540px) {
    .search-button {
      display: block;
    }
  }
  @media (min-width: 540px) {
    .search-button {
      display: none;
    }
  }
`;
