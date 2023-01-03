import styled from "styled-components";

export const SidebarWrapper = styled.div`
  /* padding-top: 8rem;
  margin-left: 1rem; */
  padding: 8rem .9rem;
  /* padding-left: 3rem; */
  height: 100vh;
  position: fixed;
  top: 0;
  h3 {
    color: #545f7d;
  }
`;
export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-weight: 400;
  font-size: 16px;
  opacity: 0.9;
  .icon {
    margin-right: 1rem;
  }
  @media (min-width: 540px) {
    .icon {
      width: 20px;
      height: 20px;
    }
  }
`;
export const SidebarText = styled.span`
  color: #213f7d;
  @media (max-width: 540px) {
    display: none;
  }
`;
