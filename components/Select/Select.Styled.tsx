import styled from 'styled-components'

const StyledSelect = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  select {
    border: 1px solid #333;
    height: 30px;
    border-radius: 4px;
    color: #ddd;
    font-size: 14px;
    padding: 0 10px;
    background-color: #000;
    appearance: none;
    cursor: pointer;
    padding-left: 14px;
    padding-right: 36px;
    padding-bottom: 2px;
  }

  .selectSuffix {
    display: inline-flex;
    position: absolute;
    right: 12px;
    pointer-events: none;
  }
`

export default StyledSelect