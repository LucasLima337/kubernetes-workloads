# INFO

> https://kubernetes.io/docs/concepts/workloads/controllers/statefulset

### Sobre o Statefulset

- Gerenciamento de aplicações stateful (com estado);

- Oferece ordenação aos Pods, os tornando únicos;

- Headless Service.


### Desenho

###########              ###########               ###########      
#         #              #         #               #         #
# mysql-0 #              # mysql-1 #               # mysql-2 #
#         #              #         #               #         #
###########              ###########               ###########      
    |                        |                         |
    |                        |                         |
    |                        |                         |
# mysql-0.service #      # mysql-1.service #       # mysql-2.service #
