const data = {
    "Geometria Analítica": {
        "periodo": 1,
        "requisito": []
    },
    "Cálculo I": {
        "periodo": 1,
        "requisito": []       
    },
    "Fundamentos de Química para Engenharia I-B": {
        "periodo": 1,
        "requisito": []
    },
    "Biologia Celular": {
        "periodo": 1,
        "requisito": []
    },
    "Leitura e Interpretação de Desenho Técnico": {
        "periodo": 1,
        "requisito": []
    },
    "Leitura e Produção de Textos Acadêmicos": {
        "periodo": 1,
        "requisito": []
    },
    "Introdução à Engenharia Bioquímica": {
        "periodo": 1,
        "requisito": []
    },
    "Introdução à Ciência dos Materiais": {
        "periodo": 1,
        "requisito": []
    },
    "Álgebra Linear": {
        "periodo": 2,
        "requisito": [
            "Geometria Analítica"
        ]
    },
    "Cálculo II": {
        "periodo": 2,
        "requisito": [
            "Cálculo I",
            "Geometria Analítica"
        ]
    },
    "Física I": {
        "periodo": 2,
        "requisito": []
    },
    "Química Geral Experimental": {
        "periodo": 2,
        "requisito": [
            "Fundamentos de Química para Engenharia I-B"
        ]
    },
    "Fundamentos de Química para Engenharia II-A": {
        "periodo": 2,
        "requisito": [
            "Fundamentos de Química para Engenharia I-B"
        ]
    },
    "Microbiologia": {
        "periodo": 2,
        "requisito": [
            "Biologia Celular"
        ]
    },
    "Engenharia Genética": {
        "periodo": 2,
        "requisito": [
            "Biologia Celular"
        ]
    },
    "Física Experimental I": {
        "periodo": 2,
        "requisito": []
    },
    "Microbiologia Experimental": {
        "periodo": 2,
        "requisito": []
    },
    "Introdução aos Métodos Numéricos e Computacionais": {
        "periodo": 3,
        "requisito": [
            "Geometria Analítica"
        ]
    },
    "Estatística": {
        "periodo": 3,
        "requisito": [
            "Cálculo II"
        ]
    },
    "Cálculo III": {
        "periodo": 3,
        "requisito": [
            "Cálculo II"
        ]
    },
    "Mecânica": {
        "periodo": 3,
        "requisito": [
            "Cálculo II",
            "Física I"
        ]
    },
    "Física II": {
        "periodo": 3,
        "requisito": [
            "Cálculo II",
            "Física I"
        ]
    },
    "Balanço de Massa e Energia": {
        "periodo": 3,
        "requisito": []
    },
    "Química Orgânica Fundamental": {
        "periodo": 3,
        "requisito": [
            "Fundamentos de Química para Engenharia II-A"
        ]
    },
    "Cálculo IV": {
        "periodo": 4,
        "requisito": [
            "Álgebra Linear",
            "Cálculo II"
        ]
    },
    "Física III": {
        "periodo": 4,
        "requisito": [
            "Física II"
        ]
    },
    "Termodinâmica Química Aplicada I": {
        "periodo": 4,
        "requisito": [
            "Cálculo II",
            "Balanço de Massa e Energia"
        ]
    },
    "Química Analítica para Engenharia": {
        "periodo": 4,
        "requisito": [
            "Fundamentos de Química para Engenharia II-A",
            "Química Geral Experimental"
        ]
    },
    "Estrutura e Química de Materiais Lignocelulósicos": {
        "periodo": 4,
        "requisito": [
            "Química Orgânica Fundamental"
        ]
    },
    "Física Experimental III": {
        "periodo": 4,
        "requisito": [
            "Física Experimental I"
        ]
    },
    "Gestão de Negócios": {
        "periodo": 4,
        "requisito": []
    },
    "Bioquímica I": {
        "periodo": 4,
        "requisito": [
            "Química Orgânica Fundamental",
            "Biologia Celular"
        ]
    },
    "Bioquímica Experimental I": {
        "periodo": 4,
        "requisito": []
    },
    "Engenharia da Qualidade": {
        "periodo": 5,
        "requisito": [
            "Estatística"
        ]
    },
    "Eletricidade Aplicada": {
        "periodo": 5,
        "requisito": [
            "Física III"
        ]
    },
    "Fenômenos de Transporte I": {
        "periodo": 5,
        "requisito": [
            "Mecânica",
            "Cálculo III"
        ]
    },
    "Termodinâmica Química Aplicada II": {
        "periodo": 5,
        "requisito": [
            "Termodinâmica Química Aplicada I"
        ]
    },
    "Análise Instrumental": {
        "periodo": 5,
        "requisito": [
            "Química Analítica para Engenharia"
        ]
    },
    "Laboratório de Eletricidade": {
        "periodo": 5,
        "requisito": [
            "Física Experimental III"
        ]
    },
    "Bioquímica Experimental II": {
        "periodo": 5,
        "requisito": [
            "Bioquímica I"
        ]
    },
    "Bioquímica II": {
        "periodo": 5,
        "requisito": [
            "Bioquímica I",
            "Bioquímica Experimental I"
        ]
    },
    "Tecnologia de Conversão de Biomassa Vegetal": {
        "periodo": 5,
        "requisito": [
            "Estrutura e Química de Materiais Lignocelulósicos"
        ]
    },
    "Tecnologia de Biopolímeros": {
        "periodo": 5,
        "requisito": [
            "Química Orgânica Fundamental"
        ]
    },
    "Fundamentos de Engenharia Econômica": {
        "periodo": 6,
        "requisito": [
            "Estatística"
        ]
    },
    "Fenômenos de Transporte II": {
        "periodo": 6,
        "requisito": [
            "Fenômenos de Transporte I"
        ]
    },
    "Laboratório de Engenharia Química I": {
        "periodo": 6,
        "requisito": [
            "Fenômenos de Transporte I"
        ]
    },
    "Operações Unitárias I": {
        "periodo": 6,
        "requisito": [
            "Fenômenos de Transporte I"
        ]
    },
    "Cinética Química Aplicada": {
        "periodo": 6,
        "requisito": [
            "Termodinâmica Química Aplicada II"
        ]
    },
    "Tecnologia de Processos Fermentativos": {
        "periodo": 6,
        "requisito": [
            "Microbiologia"
        ]
    },
    "Engenharia de Segurança do  Trabalho e Biossegurança": {
        "periodo": 6,
        "requisito": [
            "Engenharia Genética"
        ]
    },
    "Operações Unitárias II": {
        "periodo": 7,
        "requisito": [
            "Fenômenos de Transporte II"
        ]
    },
    "Fenômenos de Transporte III": {
        "periodo": 7,
        "requisito": [
            "Fenômenos de Transporte II"
        ]
    },
    "Laboratório de Engenharia Química II": {
        "periodo": 7,
        "requisito": [
            "Fenômenos de Transporte II"
        ]
    },
    "Fundamentos de Administração da Produção": {
        "periodo": 7,
        "requisito": [
            "Gestão de Negócios"
        ]
    },
    "Engenharia Ambiental": {
        "periodo": 7,
        "requisito": [
            "Bioquímica I"
        ]
    },
    "Engenharia Bioquímica I": {
        "periodo": 7,
        "requisito": [
            "Tecnologia de Processos Fermentativos"
        ]
    },
    "Genética e Biotecnologia Vegetal": {
        "periodo": 7,
        "requisito": [
            "Engenharia Genética",
            "Bioquímica II"
        ]
    },
    "Enzimologia": {
        "periodo": 7,
        "requisito": [
            "Engenharia Genética",
            "Bioquímica I",
            "Microbiologia"
        ]
    },
    "Modelagem e Simulação de Processos Biotecnológicos": {
        "periodo": 8,
        "requisito": [
            "Introdução aos Métodos Numéricos e Computacionais",
            "Operações Unitárias II"
        ]
    },
    "Operações Unitárias III": {
        "periodo": 8,
        "requisito": [
            "Fenômenos de Transporte III"
        ]
    },
    "Processos Bioquímicos Industriais": {
        "periodo": 8,
        "requisito": [
            "Tecnologia de Processos Fermentativos",
            "Operações Unitárias II"
        ]
    },
    "Instrumentação e Controle de Bioprocessos": {
        "periodo": 8,
        "requisito": [
            "Tecnologia de Processos Fermentativos",
            "Eletricidade Aplicada",
            "Fenômenos de Transporte II"
        ]
    },
    "Laboratório de Engenharia Química III": {
        "periodo": 8,
        "requisito": [
            "Operações Unitárias I",
            "Operações Unitárias II"
        ]
    },
    "Reatores Bioquímicos": {
        "periodo": 8,
        "requisito": [
            "Cinética Química Aplicada",
            "Engenharia Bioquímica I"
        ]
    },
    "Engenharia Bioquímica II": {
        "periodo": 8,
        "requisito": [
            "Engenharia Bioquímica I"
        ]
    },
    "Laboratório de Engenharia Bioquímica": {
        "periodo": 8,
        "requisito": [
            "Engenharia Bioquímica I",
            "Enzimologia"
        ]
    },
    "Estatística em Bioprocessos": {
        "periodo": 9,
        "requisito": [
            "Processos Bioquímicos Industriais",
            "Estatística"
        ]
    },
    "Trabalho de Conclusão de Curso I": {
        "periodo": 9,
        "requisito": [
            "Engenharia Bioquímica I"
        ]
    },
    "Tecnologia de Bebidas": {
        "periodo": 9,
        "requisito": [
            "Tecnologia de Processos Fermentativos"
        ]
    },
    "Tecnologia de Bebidas Experimental": {
        "periodo": 9,
        "requisito": [
            "Tecnologia de Processos Fermentativos"
        ]
    },
    "Tecnologia do Cultivo de Células Animais": {
        "periodo": 10,
        "requisito": [
            "Engenharia Bioquímica I"
        ]
    },
    "Trabalho de Conclusão de Curso II": {
        "periodo": 10,
        "requisito": [
            "Trabalho de Conclusão de Curso I"
        ]
    }
}
