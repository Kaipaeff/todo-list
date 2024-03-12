import { createGlobalStyle } from 'styled-components';
import { backgroundColor, textColor } from './Colors';

export const GlobalStyles = createGlobalStyle`

body {
  display: flex;
	flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: "Nunito", "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: ${textColor};
  background-color: ${backgroundColor};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

main {
  display: block;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

b {
  font-weight: bolder;
}

strong {
  font-weight: bolder;
}

code {
  font-family: monospace, monospace;
  font-size: 1em;
}

kbd {
  font-family: monospace, monospace;
  font-size: 1em;
}

samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
  bottom: -0.25em;
}

sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
  top: -0.5em;
}

img {
  height: auto;
  max-width: 100%;
  border: 0;
  border-style: none;
  vertical-align: middle;
  object-fit: cover;
  -o-object-fit: cover;
}

button {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  overflow: visible;
  text-transform: none;
}

button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

optgroup {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

select {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  text-transform: none;
}

textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: auto;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

[type=checkbox] {
  box-sizing: border-box;
  padding: 0;
}

[type=radio] {
  box-sizing: border-box;
  padding: 0;
}

[type=number]::-webkit-inner-spin-button {
  height: auto;
}

[type=number]::-webkit-outer-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
}

[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

*::before,
*::after {
  box-sizing: inherit;
}

*::-webkit-scrollbar {
  display: none;
}

ol,
ul {
  list-style: none;
}

input {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  overflow: visible;
}

/*Меняем цвет плейсхолдера в инпуте Сафари и Хром*/
/*Меняем цвет плейсхолдера в инпуте для Мозилы */
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder,
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #B5B6BC;
}

input:focus,
textarea:focus {
  outline: none;
}

*:focus {
  outline: 2px solid transparent;
}
`;
