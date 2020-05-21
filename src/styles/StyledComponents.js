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
    position:relative;
    background: ${props => `${props.bgColor}`};
    border-radius: 10px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 20px 0 20px 30px;
    box-sizing:border-box;
    }

    @media screen and (min-width: 768px){
        opacity: 0.85;

        &:hover{
            transition: opacity .3s;
            opacity: 1;
        }
    }
`

export const PokemonBoxInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:100%;

    .Number{
        font-family: 'SF Pro Display Bold';
        font-size: 12px;
        line-height: 14px;
        color: #17171b99;
    }

    .Name{
        font-family: 'SF Pro Display Bold';
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        text-transform:capitalize
    }

    .Types{
        display:flex;

        .Type {
            padding: 5px;
            border-radius: 3px;
            margin-right: 10px;
            
            p{
                font-family: 'SF Pro Display';
                font-size: 12px;
                line-height: 14px;
                display: flex;
                align-items: center;
                text-align: center;
                color: #FFFFFF;
                text-transform:capitalize;
            }

            &--normal {
                background-color: #a8a878;
            }
            &--grass {
                background-color: #78c850;
            }
            &--ground {
                background-color: #e0c068;
            }
            &--fighting {
                background-color: #c03028;
            }
            &--rock {
                background-color: #b8a038;
            }
            &--steel {
                background-color: #b8b8d0;
            }
            &--fire {
                background-color: #f08030;
            }
            &--electric {
                background-color: #f8d030;
            }
            &--flying {
                background-color: #a890f0;
            }
            &--psychic {
                background-color: #f85888;
            }
            &--bug {
                background-color: #a8b820;
            }
            &--dragon {
                background-color: #7038f8;
            }
            &--water {
                background-color: #6890f0;
            }
            &--ice {
                background-color: #98d8d8;
            }
            &--poison {
                background-color: #a040a0;
            }
            &--dark {
                background-color: #705848;
            }
            &--ghost {
                background-color: #705898;
            }
            &--fairy {
                background-color: #ffaec9;
            }
        }
    }
`

export const AboutHeader = styled.header`
    width: 100%;
    height: 100%;
    background: ${props => `${props.bgColor}`};
    z-index: 1;
`

export const AboutTitle = styled.h3`
    font-family: 'SF Pro Display Bold';
    font-size: 16px;
    line-height: 19px;
    color: ${props => `${props.color}`};
    margin-bottom: 15px;
`

export const PokemonStat = styled.div`
    display:flex;
    align-items: center;
    margin: 5px 0;

    .Name{
        font-family: 'SF Pro Display Bold';
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #17171B;
        text-align: left;
        width: 70px;
    }

    .BaseStat{
        font-family: 'SF Pro Display';
        font-size: 16px;
        line-height: 19px;
        text-align: right;
        color: #747476;
    }
`


