package br.com.unievangelica.ftt.domain.endereco;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import br.com.unievangelica.ftt.domain.ginasio.Ginasio;
import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.unievangelica.ftt.core.entity.AbstractEntity;
import br.com.unievangelica.ftt.domain.pais.Pais;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "endereco")
public class Endereco extends AbstractEntity{
	
	private static final long serialVersionUID = 1L;
	
	@NotEmpty
	@Column(name = "logradouro", length = 80, nullable = false)
	private String logradouro;
	
	@Column(name = "complemento", length = 30)
	private String complemento;
	
	@NotEmpty
	@Column(name = "bairro", length = 30)
	private String bairro;
	
	@NotEmpty
	@Column(name = "cidade", length = 50)
	private String cidade;
	
	@NotEmpty
	@Column(name = "estado", length = 30)
	private String estado;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "pais_id", referencedColumnName = "id")
	private Pais pais;
	
	@JsonIgnore
	@OneToOne(mappedBy = "endereco")
	private Ginasio ginasio;

}
