function toggleTheme() {
  html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  // verifica se o tema é claro ou escuro
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/sheldon-light.jpg")
    img.setAttribute("alt", "Sheldon Cooper fazendo a saudação vulcana com um laço na cabeça")
  } else {
    img.setAttribute("src", "./assets/assets/sheldon.jpg")
    img.setAttribute(
      "alt",
      "Sheldon Cooper fazendo a saudação vulcana"
    )
  }
  // subtituir tag img
  // se o tema for claro mudar imagem para
  // se não for claro mudar imagem
}
