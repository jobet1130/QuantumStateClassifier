document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Optional: JavaScript-defined dark mode CSS variables
const darkStyles = document.createElement('style');
darkStyles.innerHTML = `
  body.dark {
    --bg: #1e1e1e;
    --text: #f4f4f4;
    --link: #4ea1ff;
    --header: #9bd3ff;
    --code-bg: #2c2c2c;
    --pre-bg: #121212;
    --pre-text: #cfcfcf;
  }

  body.dark {
    background-color: var(--bg);
    color: var(--text);
  }

  body.dark header,
  body.dark footer {
    background-color: var(--code-bg);
  }

  body.dark h1, 
  body.dark h2 {
    color: var(--header);
  }

  body.dark a {
    color: var(--link);
  }

  body.dark pre {
    background-color: var(--pre-bg);
    color: var(--pre-text);
  }
`;
document.head.appendChild(darkStyles);
