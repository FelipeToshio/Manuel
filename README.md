Hackthon Manuel

Proposta:

Projeto que visa criar um aplicativo em ionic5 para auxiliar idosos.
A proposta era utilizar mqtt, arduino com modulo wifi, raspberry, python no beckend e utilizar text to speech(TTS) e Sepeech to text (STT).
Projeto ainda nao esta completamente integrado, mas as funcionalidades estão desenvolvidas, faltando poucas coisas.
Tempo para desenvolvimento: 2 dias 

Ideia:

Desenvolver um aplicativo utilizando ionic que monitora os batimentos cardíacos e em caso de problemas envia mensagens para os responsaveis do idoso e Hospital cadastrado, com objetivo de facilitar o atendimento.
Junto a isso existiria uma tela com histórico médico do paciente para auxiliar os médicos que o atenderem.


Proximos passos:

1) Corrigir versionamento do Ionic5: no fim do projeto tivemos erros de merge, portanto não conseguimos buildar o app integrado com o raspberry
2)  O codigo do Ionic já é capaz de gravar audios com o aparelho e armazenalo, proximo passo seria enviar para o STT para ele tratar e me devolver um arquivo TTS
3) Integrar com o banco de dados para tratar os batimentos cardíacos e executar o envio de mensagens 
