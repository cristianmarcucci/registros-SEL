

//Manter alinhamento do lodo da Sala do Empreendedor com o campo de preenchimento
const ajusteHeader = document.querySelector('main').offsetWidth;
document.querySelector('#container').style.width = ajusteHeader+'px';

//Verificação se o campo NOME não foi deixado vazio
const nome = document.querySelector('#name');

nome.addEventListener('blur', event => {
    if(nome.value == ""){
        nome.classList.add('invalid');
        nome.classList.remove('valid');
    } else {
        nome.classList.add('valid');
        nome.classList.remove('invalid');
    }
})

//Verificação se o campo EMAIL foi preenchido corretamente
const email = document.querySelector('#email');

email.addEventListener('blur', event => {
    if(email.value.includes('@')){
        email.classList.add('valid');
        email.classList.remove('invalid');
    } else {
        email.classList.add('invalid');
        email.classList.remove('valid');
    }
})

//Adicionando novos campos para Serviço
//Adicionando o botão "Remover" caso tenha mais de um serviço
const addButton = document.querySelector('#add');

function adicionarServico(){
    let control = document.querySelectorAll('.out').length;
    control--;
    switch (control) {
        case 1:
            document.querySelector('#servico2').classList.remove('out')
            document.querySelector('#rem').classList.remove('hide')
            break;

        case 0:
            document.querySelector('#servico3').classList.remove('out')
            break;
 
        default:
            break;
    }

}

addButton.addEventListener('click', adicionarServico)

//Removendo campos para Serviço
//Suprimindo o botão "Remover" caso tenha apenas um serviço
const remButton = document.querySelector('#rem');

function removerServico(){
    let control = document.querySelectorAll('.out').length;
    control++;
    switch (control) {
        case 1:
            document.querySelector('#servico3').classList.add('out')
            break;

        case 2:
            document.querySelector('#servico2').classList.add('out')
            document.querySelector('#rem').classList.add('hide')
            break;
 
        default:
            break;
    }

}

remButton.addEventListener('click', removerServico)

//Verificando se há campos obrigatórios que não foram preenchidos
function verification() {
    if(nome.value){
        nome.classList.remove('invalid');
    }else{
        nome.classList.add('invalid');
        nome.classList.remove('valid');
        if(!document.querySelector('#presentation').classList.contains('hide')){
            document.querySelector('#presentation').classList.add('hide');
        }
    }

    if(!document.querySelector('#cpf').classList.contains('valid')){
        document.querySelector('#cpf').classList.add('invalid');
        document.querySelector('#cpf').classList.remove('valid');
        if(!document.querySelector('#presentation').classList.contains('hide')){
            document.querySelector('#presentation').classList.add('hide');
        }
    }

    if(!document.querySelector('#tel').classList.contains('valid')){
        document.querySelector('#tel').classList.add('invalid');
        document.querySelector('#tel').classList.remove('valid');
        if(!document.querySelector('#presentation').classList.contains('hide')){
            document.querySelector('#presentation').classList.add('hide');
        }
    }

    if(document.querySelector('#services').value){
        document.querySelector('#services').classList.add('valid');
        document.querySelector('#services').classList.remove('invalid');
    }else{
        document.querySelector('#services').classList.add('invalid');
        document.querySelector('#services').classList.remove('valid');
        if(!document.querySelector('#presentation').classList.contains('hide')){
            document.querySelector('#presentation').classList.add('hide');
        }
    }

    if(document.querySelector('#services2').value  && !document.querySelector('#servico2').classList.contains('out')){
        document.querySelector('#services2').classList.add('valid');
        document.querySelector('#services2').classList.remove('invalid');
    }else{
        if(!document.querySelector('#services2').value  && !document.querySelector('#servico2').classList.contains('out')){
            document.querySelector('#services2').classList.add('invalid');
            document.querySelector('#services2').classList.remove('valid');
            if(!document.querySelector('#presentation').classList.contains('hide')){
                document.querySelector('#presentation').classList.add('hide');
            }
        }else{
            document.querySelector('#services2').classList.add('invalid');
            document.querySelector('#services2').classList.remove('valid');
        }
    }

    if(document.querySelector('#services3').value  && !document.querySelector('#servico3').classList.contains('out')){
        document.querySelector('#services3').classList.add('valid');
        document.querySelector('#services3').classList.remove('invalid');
    }else{
        if(!document.querySelector('#services3').value  && !document.querySelector('#servico3').classList.contains('out')){
            document.querySelector('#services3').classList.add('invalid');
            document.querySelector('#services3').classList.remove('valid');
            if(!document.querySelector('#presentation').classList.contains('hide')){
                document.querySelector('#presentation').classList.add('hide');
            }
        }else{
            document.querySelector('#services3').classList.add('invalid');
            document.querySelector('#services3').classList.remove('valid');
        }
    }

    if(document.querySelector('#source').value){
        document.querySelector('#source').classList.add('valid');
        document.querySelector('#source').classList.remove('invalid');
    }else{
        document.querySelector('#source').classList.add('invalid');
        document.querySelector('#source').classList.remove('valid');
        if(!document.querySelector('#presentation').classList.contains('hide')){
            document.querySelector('#presentation').classList.add('hide');
        }
    }

}

//Apresentar tabela com dados
const exportButton = document.querySelector('#export');

function exportTable(){
    const date = new Date();
    const dia = date.getDate()<10 ? '0'+date.getDate() : date.getDate();
    const mes = date.getMonth()<9 ? '0'+ (date.getMonth()+ 1) : date.getMonth()+1;
    const ano = date.getFullYear();
    const hora = date.getHours() < 10 ? '0'+date.getHours() : date.getHours() ;
    const min = date.getMinutes() < 10 ? '0'+date.getMinutes(): date.getMinutes();

    document.querySelector('#presentation').classList.remove('hide');
    verification();

    document.querySelector('.l1c1').innerHTML = `${dia}/${mes}/${ano}`;
    document.querySelector('.l1c2').innerHTML = `${hora}:${min}`;
    document.querySelector('.l1c3').innerHTML = document.querySelector('#name').value;
    document.querySelector('.l1c4').innerHTML = document.querySelector('#cpf').value;
    document.querySelector('.l1c5').innerHTML = document.querySelector('#tel').value;
    document.querySelector('.l1c6').innerHTML = document.querySelector('#email').value;
    document.querySelector('.l1c7').innerHTML = document.querySelector('#source').value;
    document.querySelector('.l1c8').innerHTML = document.querySelector('#services').value;

    var check1 = document.getElementsByName('observation')
    for(i=0; i<check1.length; i++){
        if(check1[i].checked){
            document.querySelector('.l1c9').innerHTML = check1[i].value;
        } 
    }

     document.getElementsByName('observation').value;

    if(document.querySelector('#servico2').classList.contains('out')){
        document.querySelector('.linha2').classList.add('out2')
    }else{
        document.querySelector('.linha2').classList.remove('out2');
        document.querySelector('.l2c1').innerHTML = `${dia}/${mes}/${ano}`;
        document.querySelector('.l2c2').innerHTML = `${hora}:${min}`;
        document.querySelector('.l2c3').innerHTML = document.querySelector('#name').value;
        document.querySelector('.l2c4').innerHTML = document.querySelector('#cpf').value;
        document.querySelector('.l2c5').innerHTML = document.querySelector('#tel').value;
        document.querySelector('.l2c6').innerHTML = document.querySelector('#email').value;
        document.querySelector('.l2c7').innerHTML = document.querySelector('#source').value;
        document.querySelector('.l2c8').innerHTML = document.querySelector('#services2').value;

        var check2 = document.getElementsByName('observation2')
        for(j=0; j<check2.length; j++){
            if(check2[j].checked){
                document.querySelector('.l2c9').innerHTML = check2[j].value;
            }
        }
    }

    if(document.querySelector('#servico3').classList.contains('out')){
        document.querySelector('.linha3').classList.add('out2');
    }else{
        document.querySelector('.linha3').classList.remove('out2');
        document.querySelector('.l3c1').innerHTML = `${dia}/${mes}/${ano}`;
        document.querySelector('.l3c2').innerHTML = `${hora}:${min}`;
        document.querySelector('.l3c3').innerHTML = document.querySelector('#name').value;
        document.querySelector('.l3c4').innerHTML = document.querySelector('#cpf').value;
        document.querySelector('.l3c5').innerHTML = document.querySelector('#tel').value;
        document.querySelector('.l3c6').innerHTML = document.querySelector('#email').value;
        document.querySelector('.l3c7').innerHTML = document.querySelector('#source').value;
        document.querySelector('.l3c8').innerHTML = document.querySelector('#services3').value;
        var check3 = document.getElementsByName('observation3')
        for(k=0; k<check3.length; k++){
            if(check3[k].checked){
                document.querySelector('.l3c9').innerHTML = check3[k].value;
            }
        }
    }
}

exportButton.addEventListener('click', exportTable)

//Manter checkbox desmarcado ao iniciar o site
var inputs = document.getElementsByTagName('input');

for (var i=0; i<inputs.length; i++)  {
  if (inputs[i].type == 'checkbox')   {
    inputs[i].checked = false;
  }
}

//Apresentando/recolhendo as agendas
const agenda_prefeitura = document.querySelector('input[name=agenda_prefeitura]');

agenda_prefeitura.addEventListener('change', event =>{
    if(agenda_prefeitura.checked){
      document.querySelector('.iframeAgendaContainer').classList.remove('out2');
      document.querySelector('.iframeAgenda').src = "https://www2.londrina.pr.gov.br/sistemas/agendamento/admin/";
    }else{
        document.querySelector('.iframeAgendaContainer').classList.add('out2');
        document.querySelector('.iframeAgenda').src = "about:blank";
    }
})

const agenda_recepcao = document.querySelector('input[name=agenda_recepcao]');

agenda_recepcao.addEventListener('change', event =>{
    if(agenda_recepcao.checked){
      document.querySelector('.iframeRecepcaoContainer').classList.remove('out2');
      document.querySelector('.iframeRecepcao').src = "https://docs.google.com/spreadsheets/d/14wyXwu166-xCwG6Iiws8yXqJ9CCFHQBV0yzqFBMP8MU/edit#gid=1778998742";
    }else{
        document.querySelector('.iframeRecepcaoContainer').classList.add('out2');
        document.querySelector('.iframeRecepcao').src = "about:blank";
    }
})

//Limpando dados inseridos para novo atendimento
const clear = document.querySelector('#clear');

clear.addEventListener('click', event => {
    
    document.querySelector('#name').value = "";
    if(document.querySelector('#name').classList.contains('invalid')){
        document.querySelector('#name').classList.remove('invalid');
    }
    if(document.querySelector('#name').classList.contains('valid')){
        document.querySelector('#name').classList.remove('valid');
    }
    
    document.querySelector('#cpf').value = "";
    if(document.querySelector('#cpf').classList.contains('invalid')){
        document.querySelector('#cpf').classList.remove('invalid');
    }
    if(document.querySelector('#cpf').classList.contains('valid')){
        document.querySelector('#cpf').classList.remove('valid');
    }
    
    document.querySelector('#tel').value = "";
    if(document.querySelector('#tel').classList.contains('invalid')){
        document.querySelector('#tel').classList.remove('invalid');
    }
    if(document.querySelector('#tel').classList.contains('valid')){
        document.querySelector('#tel').classList.remove('valid');
    }

    document.querySelector('#email').value = "";
    if(document.querySelector('#email').classList.contains('invalid')){
        document.querySelector('#email').classList.remove('invalid');
    }
    if(document.querySelector('#email').classList.contains('valid')){
        document.querySelector('#email').classList.remove('valid');
    }

    document.querySelector('#source').value = "";
    if(document.querySelector('#source').classList.contains('invalid')){
        document.querySelector('#source').classList.remove('invalid');
    }
    if(document.querySelector('#source').classList.contains('valid')){
        document.querySelector('#source').classList.remove('valid');
    }

    document.querySelector('#services').value = "";
    if(document.querySelector('#services').classList.contains('invalid')){
        document.querySelector('#services').classList.remove('invalid');
    }
    if(document.querySelector('#services').classList.contains('valid')){
        document.querySelector('#services').classList.remove('valid');
    }

    var wipe1 = document.getElementsByName('observation')
    for(i=0; i<wipe1.length; i++){
        wipe1[i].checked=false;
    }

    document.querySelector('#services2').value = "";
    if(document.querySelector('#services2').classList.contains('invalid')){
        document.querySelector('#services2').classList.remove('invalid');
    }
    if(document.querySelector('#services2').classList.contains('valid')){
        document.querySelector('#services2').classList.remove('valid');
    }

    var wipe2 = document.getElementsByName('observation2')
    for(j=0; j<wipe2.length; j++){
        wipe2[j].checked=false;
    }

    document.querySelector('#services3').value = "";
    if(document.querySelector('#services3').classList.contains('invalid')){
        document.querySelector('#services3').classList.remove('invalid');
    }
    if(document.querySelector('#services3').classList.contains('valid')){
        document.querySelector('#services3').classList.remove('valid');
    }

    var wipe3 = document.getElementsByName('observation3')
    for(k=0; k<wipe3.length; k++){
        wipe3[k].checked=false;
    }
    
    if(!document.querySelector('#servico2').classList.contains('out')){
        !document.querySelector('#servico2').classList.add('out');
    }

    if(!document.querySelector('#servico3').classList.contains('out')){
        !document.querySelector('#servico3').classList.add('out');
    }

    if(!document.querySelector('#presentation').classList.contains('hide')){
        document.querySelector('#presentation').classList.add('hide');
    }
    
})


