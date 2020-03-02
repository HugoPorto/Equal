<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">BEM-VINDO!</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Equal</a></li>
                            <li class="breadcrumb-item active">Geral</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-12">
                                <div class="card bg-light">
                                    <div class="card-header text-muted border-bottom-0">
                                        Usuário Padrão
                                    </div>
                                    <div class="card-body pt-0">
                                        <div class="row">
                                            <div class="col-7">
                                                <h2 class="lead"><b>Hugo Porto</b></h2>
                                                <p class="text-muted text-sm"><b>Função: </b> Admin</p>
                                                <ul class="ml-4 mb-0 fa-ul text-muted">                                                   
                                                    <li class="small"><span class="fa-li">
                                                            <i class="fas fa-lg fa-phone"></i></span> Fone: +55 91
                                                        98474-4021
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-5 text-center">
                                                <img src="static/AdminLTE302/dist/img/user-default.jpg" alt=""
                                                    class="img-circle img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <div class="text-center">
                                            <a href="#" class="btn btn-sm btn-primary">
                                                Editar Usuário
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="info-box">
                                            <div class="info-box-content text-center">
                                                <img src="static/AdminLTE302/dist/img/equal.jpg" alt="" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info elevation-1"><i
                                            class="fab fa-product-hunt"></i></span>

                                    <div class="info-box-content">
                                        <span class="info-box-text">Produtos</span>
                                        <span class="info-box-number">
                                            10
                                            <small>%</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="info-box mb-3">
                                    <span class="info-box-icon bg-danger elevation-1"><i
                                            class="fas fa-shopping-cart"></i></span>
                                    <div class="info-box-content">
                                        <span class="info-box-text">Compras</span>
                                        <span class="info-box-number">41,410</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="info-box mb-3">
                                    <span class="info-box-icon bg-success elevation-1"><i
                                            class="fas fa-money-bill-alt"></i></span>
                                    <div class="info-box-content">
                                        <span class="info-box-text">Vendas</span>
                                        <span class="info-box-number">760</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="info-box mb-3">
                                    <span class="info-box-icon bg-warning elevation-1"><i
                                            class="fas fa-network-wired"></i></span>

                                    <div class="info-box-content">
                                        <span class="info-box-text">Transações</span>
                                        <span class="info-box-number">2,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <h4 class="m-0 text-dark">Bancos de Dados Disponíveis</h4>
                                <p class="m-0 text-dark" style="padding-bottom: 10px;">Escolha um para começar a
                                    trabalhar.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="info-box">
                                    <div class="info-box-content text-center">
                                        <p>LokiJS</p>
                                        <img src="static/AdminLTE302/dist/img/lokijs.jpg" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3" @click="openDBConfig('MySQL')">
                                <div class="info-box">
                                    <div class="info-box-content text-center">
                                        <p>MySQL</p>
                                        <img src="static/AdminLTE302/dist/img/mysql.jpg" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="info-box">
                                    <div class="info-box-content text-center">
                                        <p>Firebird</p>
                                        <img src="static/AdminLTE302/dist/img/firebird.jpg" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="info-box">
                                    <div class="info-box-content text-center">
                                        <p>PostgreSQL</p>
                                        <img src="static/AdminLTE302/dist/img/postgresql.jpg" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'Home',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
</style>
