def isBinaryStrings(n, b, syms="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"):
    return ((n == 0) and syms[0]) or (
        isBinaryStrings(n//b, b, syms).lstrip(syms[0]) + syms[n % b])


def numberDivisiblebyN(number, base):
    ACCEPTING_STATE = START_STATE = '0'
    SYMBOL_0 = '0'
    dfa = {
        str(State): {
            str(symbol): 'to_state' for symbol in range(base)
        }
        for State in range(number)
    }
    dfa[START_STATE][SYMBOL_0] = ACCEPTING_STATE

    lookup = {SYMBOL_0: ACCEPTING_STATE}.setdefault

    for num in range(number * base):
        endState = str(num % number)
        baseNumber = isBinaryStrings(num, base)
        beforeState = lookup(baseNumber[:-1], START_STATE)
        dfa[beforeState][baseNumber[-1]] = endState
        lookup(baseNumber, endState)

    return dfa


if __name__ == "__main__":
    number = input("Enter NUMBER: ")
    base = input("Enter BASE of number system: ")
    dfa = numberDivisiblebyN(number, base)
