function menuMicroondas2(opcao,tempo){
  let menu = ["pipoca","macarrao","carne","feijao","brigadeiro"]
  let posicaoArray = menu.indexOf(opcao)
  let valorPadrao = [10,8,15,12,8]
  let sucesso = "Prato pronto, bom apetite!!!"
  
  if(posicaoArray < 0){return "Prato inexistente"}
  if(opcao === menu[posicaoArray] && tempo > (valorPadrao[posicaoArray] * 2) && tempo <= (valorPadrao[posicaoArray] * 3)){return "A comida queimou"}
  if(opcao === menu[posicaoArray] && tempo > (valorPadrao[posicaoArray] * 3)){return "kabumm"}
  if(opcao === menu[posicaoArray] && tempo < (valorPadrao[posicaoArray])){return "Tempo insuficiente"}

  return sucesso
}
