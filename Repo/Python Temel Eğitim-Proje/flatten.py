test_list=[[1,'a',['cat'],2],[[[3]],'dog'],4,5]
l = []
def flatten(x):
    for i in x:
        if type(i)==list:
            flatten(i)
        if type(i)!=list:
            l.append(i)
    return l
flatten(test_list)
print(l)
