import { Component, OnInit } from "@angular/core";
import { QuadraService } from "../quadra.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Quadra } from "../quadra";
import Validation from "src/app/core/util/validation";
import { TipoQuadra } from "../tipo-quadra/tipo-quadra";
import { TipoQuadraService } from "../tipo-quadra/tipo-quadra.service";
import { Ginasio } from "../../ginasio/ginasio";
import { GinasioService } from "../../ginasio/ginasio.service";

@Component({
  selector: "app-form-lits",
  templateUrl: "./quadra-form.component.html",
  styleUrls: ["./quadra-form.component.css"]
})
export class QuadraFormComponent implements OnInit {
  titulo: string;
  quadra: Quadra;
  ginasios: Ginasio[];
  tipoQuadras: TipoQuadra[];
  quadraForm: FormGroup;
  
  constructor(
    private quadraService: QuadraService,
    private ginasioService: GinasioService,
    private tipoQuadraService: TipoQuadraService,
    private builder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.quadra = new Quadra();

    //Obter o ID pela URL
    this.quadra.id = this.route.snapshot.params["id"];

    //Titulo da pagina
    this.titulo = this.quadra.id ? "Editar" : "Cadastrar";

    this.quadraForm = this.builder.group(
      {
        id: [],
        nome: [],
        preco: [],
        tipoQuadra: [""],
        ginasio: [""]
      },
      {}
    );

    if (this.quadra.id) {
      this.quadraService.findById(this.quadra.id).subscribe(quadra => {
        this.quadraForm.patchValue(quadra);
      });
    }
    //Caso seja o formulario de visualizar
    if (this.route.snapshot.url[0].path == "visualizar") {
      //Desabilitar o formulario
      this.quadraForm.disable();

      //Alterar o titulo da pagina
      this.titulo = "Visualizar";
    }

    this.tipoQuadraService.findAll().subscribe(tipoQuadras => {
      this.tipoQuadras = tipoQuadras;
    });

    this.ginasioService.findAll().subscribe(ginasio => {
      this.ginasios = ginasio;
    });
  }
  compareFn(c1, c2): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  //Salva dados
  onSave(quadra: Quadra) {
    if (this.quadraForm.invalid) {
      //Valida todos os campos do formulario
      Validation.allFormFields(this.quadraForm);
    } else {
      this.quadraService.save(quadra).subscribe(quadra => {
        //Redireciona para a lista de quadra
        this.router.navigate(["/quadra"]);
      });
    }
  }
}
