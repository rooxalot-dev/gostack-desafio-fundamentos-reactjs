import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};

    transition: padding 0.2s;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }

        &.active {
          position: relative;

          &::after {
            content: '';
            position: absolute;
            height: 2px;
            width: 100%;
            background-color: #ff872c;
            bottom: -10px;
            left: 0;
          }
        }
      }
    }
  }
`;
