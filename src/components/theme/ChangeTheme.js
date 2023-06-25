import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  fontColor: "white",
  bgColor: "#505050",
  bodyBGColor: "#b2b2b2",
  inputFontColor: "#6e6e6e",
  itemBorder: "1px solid white",
  itemsHover:
    "rgba(255, 255, 255, 0.25) 0px 30px 60px -12px inset, rgba(255, 255, 255, 0.3) 0px 18px 36px -18px inset",
  checkboxBG: "whitesmoke",
};

export const lightTheme = {
  fontColor: "black",
  bgColor: "white",
  itemBorder: "1px solid rgb(0, 0, 0, .5)",
  bodyBGColor: "white",
  inputFrontColor: "black",
  itemsHover:
    "rgba(0, 0, 0, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
  checkboxBG: "#505050",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.bodyBGColor};
	}

	h1 {
		color: ${(props) => props.theme.fontColor};
	}

	.checkbox-ya .checkbox-ya-switch:before {
		background-color: ${(props) => props.theme.checkboxBG}
	}

	.checkbox-ya .checkbox-ya-switch {
		border: ${(props) => props.theme.itemBorder}
	}

	.main .link,
	.transfer button {
		transition: .2s all;
		background-color: ${(props) => props.theme.bgColor};
		color: ${(props) => props.theme.fontColor};
		border: ${(props) => props.theme.itemBorder};
	}

	.transfer button:hover,
	.main .link:hover {
		box-shadow: ${(props) => props.theme.itemsHover};
	}

	.transfer input {
		transition: .2s all;
		color: ${(props) => props.theme.inputFontColor};
	}

	.transfer button:focus,
	.main .link:focus {
		transform: scale(1.1);
	}
`;
