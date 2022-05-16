const NumericSystems = {
    'Binary' : {
        'id' : 'BIN',
        'base': 1,
        'regex' : '^[0-1]+$'
    }, 
    'Octal' : {
        'id' : 'OCT',
        'base' : 8,
        'regex' : '^[0-7]+$'
    },
    'Decimal' : {
        'id' : 'DEC',
        'base' : 10,
        'regex' : '^[0-9]+$'
    },
    'Hexadecimal' : {
        'id' : 'HEX',
        'base' : 16,
        'regex' : '^[a-fA-F0-9]+$'
    },
    'Roman' : {
        'id' : 'ROM',
        'base' : undefined,
        'regex' : '^[^0-9]+$'
    }
}

export default NumericSystems;