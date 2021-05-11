from random import choice
import json
f = open("graph.txt", 'r')
nodes = []
chk = set()
edges = []
n = set()
lines = []
for i,line in enumerate(f.readlines()):
    lines.append(line)
    x,y = line.split()
    n.add(x)
    n.add(y)
n = list(n)
for i,line in enumerate(lines):
    x,y = line.split()
    if x not in chk:
        chk.add(x)
        nodes.append({"id" : n.index(x), "name" : "xyz", "alias" : "zxy","img":"http://dummyimage.com/256x256.bmp/5fa2dd/ffffff","gender":"Female","crimes":[{"type":"murder"}],"address":"4 Loeprich Way"})
    if y not in chk:
        chk.add(y)
        nodes.append({"id" : n.index(y), "name" : "xyz", "alias" : "zxy","img":"http://dummyimage.com/256x256.bmp/5fa2dd/ffffff","gender":"Female","crimes":[{"type":"murder"}],"address":"4 Loeprich Way"})
    edges.append({
        "from" : n.index(x),
        "to" : n.index(y)
    })
res = {"nodes" : nodes, "edges" : edges}
with open("temp.json", "w") as temp:
    json.dump(res, temp)
f.close()