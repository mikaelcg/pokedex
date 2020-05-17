import styled from 'styled-components'

export const Title = styled.h1`
    color: #17171B;
    font-size: ${props => `${props.fontSize}px`};
    font-family: 'SF Pro Display Bold';
    line-height: 38px;
    margin-bottom: 20px;
`

export const SubTitle = styled.h2`
    color: #747476;
    font-size: ${props => `${props.fontSize}px`};
    font-family: 'SF Pro Display';
    line-height: 19px;
    font-weight: 400;
    margin-bottom: 20px;
`
export const InputComponent = styled.div`
    width: 100%;
    height: 60px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    background: #F2F2F2;
    border-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 40px;

    svg{
        color: #747476;
        width: 22px;
        height: 22px;
    }

    input{
        margin-left: 8px;
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
        font-family: 'SF Pro Display';
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #747476;

        &::placeholder {
            color: #747476;
            opacity: 1; /* Firefox */
        }

        &:-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #747476;
        }

        &::-ms-input-placeholder { /* Microsoft Edge */
          color: #747476;
        }

        @media screen and (min-width:375px){
            font-size: 16px;
        }
    }
`

export const PokemonBox = styled.div`
    max-width: 100%;
    height: 115px;
    background: #8BBE8A;
    border-radius: 10px;
    display:flex;
    justify-content: center;
    align-items:center;

    p{
        font-family: 'SF Pro Display Bold';
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`