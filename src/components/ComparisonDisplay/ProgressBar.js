import styled from "styled-components";


export const ProgressBar = styled.div`
    position: relative;
    height: 20px;
    color: #FFF;
    font-size: 12px;
    
    .blue-bar, .red-bar {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 10px;
        height: 100%;
    }

    .blue-bar {
        padding-left: 5px;
        width: 100%;
        background-color: #006FF2;
        z-index: 0;
        box-sizing: border-box;
    }

    .red-bar {
        padding-right: 10px;
        z-index: 1;
        background-color: #FF5D5D;
        width: ${props => {
            return props.barWidth && props.barWidth + 10
        }}%;
        justify-content: flex-end;
        box-sizing: border-box;
    }
`