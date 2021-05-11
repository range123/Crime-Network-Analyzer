import networkx as nx
G = nx.Graph()
G.add_edge('A','B',weight = 4)
nx.draw_networkx(G)