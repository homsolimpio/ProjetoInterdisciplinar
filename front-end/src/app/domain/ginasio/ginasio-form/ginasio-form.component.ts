import { OnInit, Component } from "@angular/core";
import { GinasioService } from "../ginasio.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { EstadoService } from "../../endereco/estado/estado.service";
import { CidadeService } from "../../endereco/cidade/cidade.service";
import { Cidade } from "../../endereco/cidade/cidade";
import { Ginasio } from "../ginasio";
import { Estado } from "../../endereco/estado/estado";

@Component({
  selector: "app-ginasio-form",
  templateUrl: "./ginasio-form.component.html",
  styleUrls: ["./ginasio-form.component.css"]
})
export class GinasioFormComponent implements OnInit {
  cidades: Cidade[];
  estados: Estado[];
  ginasio: Ginasio;
  ginasioForm: FormGroup;
  titulo: string;
  constructor(
    private ginasioService: GinasioService,
    private estadoService: EstadoService,
    private cidadeService: CidadeService,
    private builder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ginasio = new Ginasio();

    this.ginasio.id = this.route.snapshot.params["id"];

    this.titulo = this.ginasio.id ? "Editar" : "Cadastrar";

    this.ginasioForm = this.builder.group(
      {
        id: [],
        nome: ["", Validators.required],
        endereco: this.builder.group({
          id: [],
          logradouro: ["", Validators.required],
          complemento: ["", Validators.required],
          bairro: ["", Validators.required],
          cidade: ["", Validators.required],
          estado: ["", Validators.required]
        })
      },
      {}
    );

    this.estadoService.findAll().subscribe(estados => {
      this.estados = estados;
    });
  }

  compareFn(c1, c2): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  findCidadeByEstadoId(estadoId: number) {
    console.log(estadoId);
    this.cidadeService.findCidadeByEstadoId(estadoId).subscribe(cidades => {
      this.cidades = cidades;
      console.log(this.cidades);
    });
  }
}
