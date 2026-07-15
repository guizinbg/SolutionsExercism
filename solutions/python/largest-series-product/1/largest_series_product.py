def largest_product(series, size):
    num = list(series)
    lista_num = []
    if size < 0:
        raise ValueError("span must not be negative")
    if len(num) < size:
        raise ValueError("span must not exceed string length")
    if not series.isdigit():
        raise ValueError("digits input must only contain digits")
    for i in range(len(num)):
        l = []
        for j in range(size):
            if i + size <= len(num):
                l.append(int(num[i + j]))
            else:
                break
        result = 1
        for n in l:
            result = result * n
        if i + size <= len(num):
            lista_num.append(result)
        else:
            return max(lista_num)