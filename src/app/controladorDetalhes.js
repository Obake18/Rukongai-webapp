
const params = new URLSearchParams(window.location.search);
const idCaso = params.get('id');

desenharCardDetalhe('cardDetalhe', casosSobrenaturais, idCaso);