test_list=[[1, 2], [3, 4], [5, 6, 7]]

def reverse_flatten(x):
    for i in x:
        x.reverse()
        if type(i)!=list:
            break
        if type(i) == list:
            reverse_flatten(i)
    return x
print(reverse_flatten(test_list))