(() => {
    this.name = 'Arrow function'; //
    const getNameArrowFn = () => this.name; //no contexto o this se refere a função

    function getName() {
        return this.name; //objeto
    }

    const user = {
        name: 'Nome do objeto em tempo de execução', //no contexto do objeto o this faz referência ao objeto
        getNameArrowFn,
        getName
    }
    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();
